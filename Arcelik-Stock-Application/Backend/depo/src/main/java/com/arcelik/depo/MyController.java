package com.arcelik.depo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin(origins = "*")
@RestController
public class MyController {

    @Autowired
    MyService service;


    @RequestMapping(value = "/add-stock", method = RequestMethod.POST, consumes = APPLICATION_JSON_VALUE)
    public void addStock(@RequestBody StockModel stockModel) {
        service.addStock(stockModel);
    }

    @RequestMapping(value = "/ctrl-stock/{stocknum}", method = RequestMethod.GET)
    public boolean crtlStock(@PathVariable String stocknum){return service.ctrlStock(stocknum);}

    @RequestMapping(value = "/dec-stock/{stocknum}", method = RequestMethod.GET)
    public void decStock(@PathVariable String stocknum){service.decStock(stocknum);}

    @RequestMapping(value = "/get-stock", method = RequestMethod.GET)
    public List<StockModel> getStock() {
        return service.getStock();
    }

    @RequestMapping(value = "/add-defect", method = RequestMethod.POST, consumes = APPLICATION_JSON_VALUE)
    public void addDefect(@RequestBody DefectModel defectModel) {
        service.addDefect(defectModel);
    }

    @RequestMapping(value = "/get-defects", method = RequestMethod.GET)
    public List<DefectModel> getDefects() {
        return service.getDefects();
    }

    @RequestMapping(value = "/get-defects-by-customer-name/{customername}", method = RequestMethod.GET)
    public List<DefectModel> getDefectsByCustomername(@PathVariable("customername") String customername){
        return service.getDefectsByCustomername(customername);
    }

    @RequestMapping(value = "/get-defects-by-service-code/{servicecode}", method = RequestMethod.GET)
    public List<DefectModel> getDefectsByServicecode(@PathVariable("servicecode") String servicecode){
        return service.getDefectsByServicecode(servicecode);
    }

    @RequestMapping(value = "/get-defects-by-status/{status}", method = RequestMethod.GET)
    public List<DefectModel> getDefectsByStatus(@PathVariable("status") String status){
        return service.getDefectsByStatus(status);
    }

    @RequestMapping(value = "/get-defects-by-customername-and-productcode/{customername}/{productcode}", method = RequestMethod.GET)
    public DefectModel getDefectByCustomernameAndProductname(@PathVariable String customername, @PathVariable String productcode){
        return service.getDefectsByCustomernameContainingIgnoreCaseAndProductcodeContainingIgnoreCase(customername, productcode);
    }

    @RequestMapping(value = "/update-defect", method = RequestMethod.POST, consumes = APPLICATION_JSON_VALUE)
    public void updateDefect(@RequestBody DefectModel defectModel){
        service.updateDefect(defectModel);
    }


}
