<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>
    <!DOCTYPE html>

<html>

<head>

	<title>Register Account</title>

	<link rel="stylesheet" href="styleRegister.css">

</head>

<body>

	<header>

		<img src="logo.png" alt="Logo" class="logo">

        <h2>Welcome New Member!</h2>

		<div class="header-background">

			<div class="semicircle semicircle-1"></div>

			<div class="semicircle semicircle-2"></div>

			<div class="semicircle semicircle-3"></div>

		</div>

	</header>

	<main>

		<form>

			<div class="row">

				<div class="column">

					<label for="first-name">First Name:</label>

					<input type="text" id="first-name" required>

				</div>

				<div class="column">

					<label for="last-name">Last Name:</label>

					<input type="text" id="last-name" required>

				</div>

			</div>

			<div class="row">

				<label for="username">Username:</label>

				<input type="text" id="username" required>

			</div>

			<div class="row">

				<label for="email">Email:</label>

				<input type="email" id="email" required>

			</div>

			<div class="row">

				<label for="confirm-email">Confirm Email:</label>

				<input type="email" id="confirm-email" required>

			</div>

			<div class="row">

				<button type="button" onclick="validateForm()">Next</button>

			</div>

		</form>

		<p><a href="#">Already have an account?</a></p>

	</main>

	<footer>

		<div class="footer-background"></div>

	</footer>

    <script src="script.js"></script>
</body>

</html>
</body>
</html>