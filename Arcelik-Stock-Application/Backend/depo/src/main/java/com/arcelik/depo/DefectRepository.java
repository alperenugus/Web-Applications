package com.arcelik.depo;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DefectRepository extends CrudRepository<DefectModel, Integer>, JpaSpecificationExecutor<DefectModel>{

    public List<DefectModel> findAllByOrderByEntrydateDesc();

    public List<DefectModel> getDefectsByCustomernameContainingIgnoreCaseOrderByEntrydateDesc(String customername);

    public List<DefectModel> getDefectsByServicecodeContainingIgnoreCaseOrderByEntrydateDesc(String servicecode);

    public List<DefectModel> getDefectsByStatusContainingIgnoreCaseOrderByEntrydateDesc(String status);

    public DefectModel getDefectsByCustomernameContainingIgnoreCaseAndProductcodeContainingIgnoreCase(String customername, String customerphone);
}
