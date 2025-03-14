import { TypeRootStackParamList } from "./app/navigation/types";

declare global {
    namespace ReactNavigation {
        interface RootStackParamList extends TypeRootStackParamList{}
    }
}