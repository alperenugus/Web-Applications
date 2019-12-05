package com.arcelik.depo;

import javax.persistence.*;

@Entity
@Table(name = "stock")
public class StockModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "stocknum")
    private String stocknum;
    @Column(name = "countnum")
    private String countnum;


    public StockModel() {
    }

    public StockModel(int id, String stocknum, String countnum) {
        this.id = id;
        this.stocknum = stocknum;
        this.countnum = countnum;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStocknum() {
        return stocknum;
    }

    public void setStocknum(String stocknum) {
        this.stocknum = stocknum;
    }

    public String getCountnum() {
        return countnum;
    }

    public void setCountnum(String countnum) {
        this.countnum = countnum;
    }
}
