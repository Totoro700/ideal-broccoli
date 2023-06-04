package skill.issue.copium.api.v3.utils;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;

public record TransactionEndpoint(String endpoint, String method, String body) {
    public TransactionInformation sendRequest() {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(java.net.URI.create(endpoint))
            .method(method, HttpRequest.BodyPublishers.ofString(body))
            .build();
        HttpClient.newHttpClient().sendAsync(request, java.net.http.HttpResponse.BodyHandlers.ofString());
        return new TransactionInformation(0, 0, "Transaction sent");
    }
}
