package skill.issue.idealbroccoli.api.v1.lifecycle;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import skill.issue.idealbroccoli.api.v1.endpoints.ItemList;
import skill.issue.idealbroccoli.api.v1.endpoints.Transaction;

@RestController
@SpringBootApplication
public class Application {
    @GetMapping("/api/v1/getItems")
    public String getItems() {
        return ItemList.getAllItems();
    }
    @GetMapping("/copium/v3/transaction")
    public String doTransaction() {
        return Transaction.doTransaction();
    }
}
