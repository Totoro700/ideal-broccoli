package skill.issue.idealbroccoli.api.v1.lifecycle;

import org.springframework.boot.SpringApplication;
public class Main {
    public static void main(String[] args) {
        PreLoader.load();
        SpringApplication.run(Application.class, args);
    }


}
