import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Component {...pageProps} />
			<footer>
				<center>
					<p>© 2022 Spandan Banerjee</p>
				</center>
			</footer>
		</div>
	);
}

export default MyApp;

