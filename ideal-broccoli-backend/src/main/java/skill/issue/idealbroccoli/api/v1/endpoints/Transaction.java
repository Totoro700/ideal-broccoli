package skill.issue.idealbroccoli.api.v1.endpoints;

import skill.issue.copium.api.v3.transaction.TransactionPipeline;

public class Transaction {
    public static String doTransaction() {
        return TransactionPipeline.processTransaction().result();
    }
}
