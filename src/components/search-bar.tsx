import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { CONSTANTS } from "../constants";
import { AppContext } from "../routes";
import githubService from "../services/api/github.service";

export default component$(() => {
	const searchString = useSignal("");
	const store = useContext(AppContext);

	const getGithubUserDetails = $(() => {
		const searchString: string = store.searchString;
		if (!searchString || searchString.length <= 0) {
			return;
		}
		githubService
			.getUserRepos(searchString)
			.then((res) => {
				if (res.length == 0) {
					throw new Error(CONSTANTS.GITHUB_ERROR_MESSAGES.NOT_FOUND);
				}
				store.userInfo = res[0].owner;
				store.userRepositories = res;
			})
			.catch((e) => {
				store.error = e.message;
			});
	});

	return (
		<>
			<section>
				<form>
					<label>
						Github Username:
						<input
							onInput$={(ev) => {
								searchString.value = (ev.target as HTMLInputElement).value;
							}}
							type="text"
							name="name"
						/>
					</label>
					<button
						type="button"
						value="Find"
						onClick$={() => {
							store.searchString = searchString.value;
							getGithubUserDetails();
						}}
					>
						Find
					</button>
				</form>
				{store.error && store.error.length > 0 && (
					<div class="alert alert-danger" role="alert">
						{store.error}
					</div>
				)}
			</section>
		</>
	);
});
