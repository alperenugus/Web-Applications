package com.arcelik.depo;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockRepository extends CrudRepository<StockModel, Integer>, JpaSpecificationExecutor<StockModel> {

    public StockModel getStockModelByStocknumContainingIgnoreCase(String stocknum);

    public List<StockModel> getAllByOrderByStocknum();
}
