package rkim.dev.burgerapp.repository;

import java.util.List;
import rkim.dev.burgerapp.entity.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {

}
