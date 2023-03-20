import Link from "next/link"

export default function Home(props: any) {
  console.log('home page props', props);

  return (
    <>
      <main>
        <p>Props, should be 'test': {props.test}</p>
        <Link href="/test">To test page</Link>
      </main>
    </>
  )
}

export const  getServerSideProps = async () => {
  return {
    props: {
      test: 'test'
    }
  }
}
