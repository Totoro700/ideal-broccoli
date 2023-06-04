package skill.issue.idealbroccoli.api.v1.lifecycle;

import skill.issue.idealbroccoli.api.v1.endpoints.ItemList;

public class PreLoader {
    public static void load() {
        ItemList.readItems();
    }
}
