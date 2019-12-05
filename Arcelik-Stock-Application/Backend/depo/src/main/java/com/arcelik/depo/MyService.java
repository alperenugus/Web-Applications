package com.arcelik.depo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class MyService {
    @Autowired
    private StockRepository stockRepo;
    @Autowired
    private DefectRepository defectRepo;


    public void addStock(StockModel stockModel) {
        if (stockRepo.getStockModelByStocknumContainingIgnoreCase(stockModel.getStocknum()) != null) {
            StockModel updatedStockModel = stockRepo.getStockModelByStocknumContainingIgnoreCase(stockModel.getStocknum());
            updatedStockModel.setCountnum(String.valueOf(Integer.valueOf(updatedStockModel.getCountnum()) + Integer.valueOf(stockModel.getCountnum())));
            stockRepo.save(updatedStockModel);
        } else {
            stockRepo.save(stockModel);
        }
    }

    public boolean ctrlStock(String stocknum){
        StockModel stockModel = stockRepo.getStockModelByStocknumContainingIgnoreCase(stocknum);
        if(stockModel != null && Integer.valueOf(stockModel.getCountnum()) > 1) return true;
        return false;
    }

    public void decStock(String stocknum){
        StockModel stockModel = stockRepo.getStockModelByStocknumContainingIgnoreCase(stocknum);
        stockModel.setCountnum(String.valueOf(Integer.valueOf(stockModel.getCountnum()) - 1 ));
    }

    public List<StockModel> getStock() {
        List<StockModel> stock = new ArrayList();
        stockRepo.getAllByOrderByStocknum().forEach(stock::add);
        return stock;
    }

    public void addDefect(DefectModel defectModel) {
        defectRepo.save(defectModel);
    }

    public List<DefectModel> getDefects() {
        List<DefectModel> defects = new ArrayList();
        defectRepo.findAllByOrderByEntrydateDesc().forEach(defects::add);
        return defects;
    }

    public List<DefectModel> getDefectsByCustomername(String customername) {
        List<DefectModel> defects = new ArrayList();
        defectRepo.getDefectsByCustomernameContainingIgnoreCaseOrderByEntrydateDesc(customername).forEach(defects::add);
        return defects;
    }

    public List<DefectModel> getDefectsByServicecode(String servicecode) {
        List<DefectModel> defects = new ArrayList();
        defectRepo.getDefectsByServicecodeContainingIgnoreCaseOrderByEntrydateDesc(servicecode).forEach(defects::add);
        return defects;
    }

    public List<DefectModel> getDefectsByStatus(String status) {
        List<DefectModel> defects = new ArrayList();
        defectRepo.getDefectsByStatusContainingIgnoreCaseOrderByEntrydateDesc(status).forEach(defects::add);
        return defects;
    }

    public DefectModel getDefectsByCustomernameContainingIgnoreCaseAndProductcodeContainingIgnoreCase(String customername, String productcode) {
        return defectRepo.getDefectsByCustomernameContainingIgnoreCaseAndProductcodeContainingIgnoreCase(customername, productcode);
    }

    public void updateDefect(DefectModel defectModel) {
        int id = defectModel.getId();
        defectRepo.deleteById(id);
        defectRepo.save(defectModel);
    }


}
