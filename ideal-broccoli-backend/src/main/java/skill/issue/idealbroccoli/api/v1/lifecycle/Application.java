package skill.issue.idealbroccoli.api.v1.lifecycle;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import skill.issue.idealbroccoli.api.v1.endpoints.ItemList;
import skill.issue.idealbroccoli.api.v1.endpoints.Transaction;

@RestController
@SpringBootApplication
public class Application {
    @GetMapping("/api/v1/getItems")
    public ResponseEntity<String> getItems() {
        return ResponseEntity
                .ok()
                .header("Access-Control-Allow-Origin", "*")
                .body(ItemList.getAllItems());
    }
    @GetMapping("/copium/v3/transaction")
    public ResponseEntity<String> doTransaction(@RequestParam("cardNumber") long num, @RequestParam("money") double chaChing) {
        return ResponseEntity
                .ok()
                .header("Access-Control-Allow-Origin", "*")
                .body(Transaction.doTransaction(num, chaChing));
    }
}
