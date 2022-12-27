import { component$, createContext } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Body from "../components/body";
import { Store } from "../stores/store";

export const AppContext = createContext<Store>("my-context");

export default component$(() => {
	return <Body />;
});

export const head: DocumentHead = {
	title: "Github Repo Viewer",
	meta: [
		{
			name: "github repo",
			content: "Website to display a list of repositories for the given user",
		},
	],
};
