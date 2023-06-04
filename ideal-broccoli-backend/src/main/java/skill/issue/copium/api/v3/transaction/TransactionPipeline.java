package skill.issue.copium.api.v3.transaction;

import skill.issue.copium.api.v3.utils.TransactionEndpoint;
import skill.issue.copium.api.v3.utils.TransactionInformation;

public class TransactionPipeline {
    //cant get caught lackin by the IRS
    private static final TransactionEndpoint ENDPOINT = null;
    public static TransactionInformation processTransaction() {
        if (ENDPOINT == null) {
            return new TransactionInformation(0, 0, "Invalid transaction endpoint due to reason: cant get caught lackin by the IRS");
        }
        return ENDPOINT.sendRequest();
    }
}
