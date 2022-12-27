import { component$ } from "@builder.io/qwik";
import { GithubRepository } from "../models/github-repositories.dto";

export const repositoryList = (repostiories: GithubRepository[]) =>
	repostiories.map((item: GithubRepository, index) => {
		return (
			<div key={index} class="p-2">
				<div class="card card-width p-2">
					<div class="card-body" style={{ height: 200 }}>
						<h5 class="card-title">{item.name}</h5>
						<h6 class="card-subtitle mb-2 text-muted">{item.description}</h6>
						<a href={item.html_url} class="card-link">
							Git URL
						</a>
						<a href={item.url} class="card-link">
							URL
						</a>
					</div>
				</div>
			</div>
		);
	});

export default component$((props: { repositories: GithubRepository[] }) => {
	const repositories = props.repositories;
	const repoList = repositoryList(repositories);
	return (
		<>
			<h2> Repository List </h2>
			<div
				class="d-flex justify-content-start flex-wrap align-items-start"
				style={{ height: "300px" }}
			>
				{repoList}
			</div>
		</>
	);
});
