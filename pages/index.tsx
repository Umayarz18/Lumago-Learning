/* This example requires Tailwind CSS v2.0+ */
import { TempLayout } from '../components/TempLayout'
import { Video } from '../components/Video'



export default function Example() {
	const pageLinks = [
		{
			name: 'Intro to Credit + Budgeting',
			link: 'course/intro-to-credit-and-budgeting'
		}
	]

  return (
    <TempLayout header={"Welcome!"}>
		<Video link={'https://www.youtube.com/embed/HyWYpM_S-2c'}/>

		<a href={pageLinks[0].link}>{pageLinks[0].name} </a>
	</TempLayout>
  )
}
