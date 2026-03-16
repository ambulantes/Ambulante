import { StyleSheet } from "react-native";
import { Searchbar, useTheme} from 'react-native-paper';
import { useState } from "react"

export function SearchBar() {
    const { colors } = useTheme();
    const [query, setQuery] = useState("");

    return (
        <Searchbar
            placeholder="Buscar productos o vendedores..."
            value={query}
            onChangeText={setQuery}
            style={[styles.searchbar, { backgroundColor: colors.surface }]}
        />
    );
}

const styles = StyleSheet.create({
    searchbar: {
        marginHorizontal: 16,
        borderRadius: 12,
        elevation: 1,
    },
});