import {
	component$,
	createContext,
	useContextProvider,
	useStore,
} from "@builder.io/qwik";
import SearchBar from "../components/search-bar";
import SearchResult from "../components/search-result";
import { CONSTANTS } from "../constants";
import { Store } from "../stores/store";

export const AppContext = createContext<Store>("my-context");

export default component$(() => {
	const defaultStoreValue: Store = {
		searchString: CONSTANTS.EMPTY_STRING,
		userInfo: null,
		userRepositories: null,
		error: null,
	};

	const state = useStore<Store>(defaultStoreValue);

	useContextProvider(AppContext, state);

	return (
		<>
			<SearchBar></SearchBar>
			<SearchResult></SearchResult>
		</>
	);
});
