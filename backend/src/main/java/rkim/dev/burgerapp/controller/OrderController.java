package rkim.dev.burgerapp.controller;

import java.util.Optional;
import java.util.*;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import rkim.dev.burgerapp.repository.OrderRepository;
import rkim.dev.burgerapp.entity.Order;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = {"*"})
public class OrderController {

    @Autowired
    private OrderRepository repository;

    // basic GET method
    @GetMapping("")
    public List<Order> getAllOrders() {
      return repository.findAll();
    }

    // basic POST method
    @PostMapping(path="/create", consumes="application/json", produces="application/json")
    @ResponseBody
    public Order createOrder(@RequestBody Order order) {
      return repository.save(order);
    }

    // basic PUT method
    @PutMapping(path="/edit/{orderId}", consumes="application/json")
    public Map<String, Object> editOrder(@PathVariable("orderId") String orderId,
      @RequestBody Map<String, Object> orderMap) {
        // salad, bacon, cheese, meat, price, ordername
        Order order = new Order(
        Integer.parseInt(orderMap.get("salad").toString()),
        Integer.parseInt(orderMap.get("bacon").toString()),
        Integer.parseInt(orderMap.get("cheese").toString()),
        Integer.parseInt(orderMap.get("meat").toString()),
        Double.parseDouble(orderMap.get("price").toString()),
        orderMap.get("orderName").toString());
        order.setId(orderId);

        Map<String, Object> response = new LinkedHashMap<String, Object>();
        response.put("message", "Order Updated successfully");
        response.put("order", repository.save(order));
        return response;
    }

    @DeleteMapping("/delete/{orderId}")
    public String deleteOrder(@PathVariable("orderId") String orderId) {
        repository.findById(orderId).map(order -> {
          repository.delete(order);
          return "Deleted successfully";
        }).orElseThrow(() -> new RuntimeException(String.format("Order not found with orderId = %s", orderId)));
        return "Deleted successfully";
    }
}
