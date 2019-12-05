package com.arcelik.depo;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "defects")
public class DefectModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "entrydate")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date entrydate;
    @Column(name = "servicecode")
    private String servicecode;
    @Column(name = "customername")
    private String customername;
    @Column(name = "customerphone")
    private String customerphone;
    @Column(name = "productcode")
    private String productcode;
    @Column(name = "explanation")
    private String explanation;
    @Column(name = "paymenttype")
    private String paymenttype;
    @Column(name = "stocknum")
    private String stocknum;
    @Column(name = "status")
    private String status;
    @Column (name = "exitdate")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date exitdate;

    public DefectModel() {
    }

    public DefectModel(int id, Date entrydate, String servicecode, String customername, String customerphone, String productcode, String explanation, String paymenttype, String stocknum, String status, Date exitdate) {
        this.id = id;
        this.entrydate = entrydate;
        this.servicecode = servicecode;
        this.customername = customername;
        this.customerphone = customerphone;
        this.productcode = productcode;
        this.explanation = explanation;
        this.paymenttype = paymenttype;
        this.stocknum = stocknum;
        this.status = status;
        this.exitdate = exitdate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getEntrydate() {
        return entrydate;
    }

    public void setEntrydate(Date entrydate) {
        this.entrydate = entrydate;
    }

    public String getServicecode() {
        return servicecode;
    }

    public void setServicecode(String servicecode) {
        this.servicecode = servicecode;
    }

    public String getCustomername() {
        return customername;
    }

    public void setCustomername(String customername) {
        this.customername = customername;
    }

    public String getCustomerphone() {
        return customerphone;
    }

    public void setCustomerphone(String customerphone) {
        this.customerphone = customerphone;
    }

    public String getProductcode() {
        return productcode;
    }

    public void setProductcode(String productcode) {
        this.productcode = productcode;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getPaymenttype() {
        return paymenttype;
    }

    public void setPaymenttype(String paymenttype) {
        this.paymenttype = paymenttype;
    }

    public String getStocknum() {
        return stocknum;
    }

    public void setStocknum(String stocknum) {
        this.stocknum = stocknum;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getExitdate() {
        return exitdate;
    }

    public void setExitdate(Date exitdate) {
        this.exitdate = exitdate;
    }
}
