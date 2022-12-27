import { component$ } from "@builder.io/qwik";
import { Owner } from "../models/github-repositories.dto";

export default component$((props: { owner: Owner | null }) => {
	const owner = props.owner;
	return (
		<>
			{owner != null && (
				<div class="p-2">
					<div class="card profile-card-width">
						<img
							class="card-img-top"
							src={owner.avatar_url}
							alt="Card image cap"
						/>
						<div class="card-body">
							<h5 class="card-title">{owner.login}</h5>
							<p class="card-text">{owner.type}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
});
