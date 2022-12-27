import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<div class="navbar-brand">Github Repos</div>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a href="/">Home</a> &nbsp;
							</li>
							<li class="nav-item">
								<a href="/about">About</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
});
