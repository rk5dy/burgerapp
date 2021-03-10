package rkim.dev.burgerapp.entity;

import java.util.List;
import org.springframework.data.annotation.Id;

public class Order {

    @Id
    private String id;
    private int saladCount;
    private int baconCount;
    private int cheeseCount;
    private int meatCount;
    private double price;
    private String orderName;

    public Order() {}

    public Order(int saladCount, int baconCount, int cheeseCount, int meatCount, double price, String orderName) {
        this.saladCount = saladCount;
        this.baconCount = baconCount;
        this.cheeseCount = cheeseCount;
        this.meatCount = meatCount;
        this.price = price;
        this.orderName = orderName;
    }

    public String getId() {
      return this.id;
    }

    public void setId(String id) {
      this.id = id;
    }

    @Override
    public String toString() {
        return String.format(
                "{id='%s', salad='%s', bacon='%s', cheese='%i', meat='%i', price='%d', orderName='%s'}",
                this.id, this.saladCount, this.baconCount, this.cheeseCount, this.meatCount, this.price, this.orderName);
    }

}
