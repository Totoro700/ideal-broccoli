package skill.issue.idealbroccoli.api.v1.endpoints;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;

public class ItemList {
    private static HashMap<String, Integer> items = new HashMap<>();

    public static void readItems() {
        //read from items.txt
        try(BufferedReader reader = new BufferedReader(new InputStreamReader(ItemList.class.getClassLoader().getResourceAsStream("items.txt")))) {
            String line;
            while((line = reader.readLine()) != null) {
                //if the line is empty, skip it
                if(line.isEmpty()) continue;
                String[] split = line.split(" ");
                items.put(split[0], Integer.parseInt(split[1]));
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
    private static String getItems() {
        StringBuilder builder = new StringBuilder();
        for(String item : items.keySet()) {
            builder.append(item).append(" ").append(items.get(item)).append("\n");
        }
        return builder.toString();
    }
    public static String getAllItems() {
        return getItems();
    }
}
