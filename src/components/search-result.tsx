import { component$, useContext } from "@builder.io/qwik";
import { AppContext } from "./body";
import GithubUserInfo from "./github-user-info";
import GithubUserRepository from "./github-user-repository";

export default component$(() => {
	const store = useContext(AppContext);
	return (
		<>
			{store.userInfo &&
				store.userRepositories &&
				store.userRepositories.length > 0 && (
					<>
						<GithubUserInfo owner={store.userInfo}></GithubUserInfo>
						<GithubUserRepository
							repositories={store.userRepositories}
						></GithubUserRepository>
					</>
				)}
		</>
	);
});
