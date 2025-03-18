import { library } from "@fortawesome/fontawesome-svg-core";

// Alle Solid-Icons importieren (aber nur die echten Icons, nicht den Metadaten-Kram)
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Icons zur Library hinzufügen
library.add(fas, far, fab);