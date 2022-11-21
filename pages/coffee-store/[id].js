import { useRouter } from 'next/router';
import Link from 'next/link';
// react component
// exported by default
const CoffeeStore = () => {
	const router = useRouter();
	// console.log('pageId', router.query.id);
	return (
		<div>
			Coffee Store Page{router.query.id}
			<br />
			<Link href="/">Back to home</Link>
		</div>
	);
	// https://nextjs.org/docs/api-reference/next/link
};
export default CoffeeStore;
