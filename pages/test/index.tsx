import Link from "next/link"

export default function Test(props: any) {
  console.log('test page props', props);
  
  return (
    <>
      <main>
        <p>Props, should be 'test-2': {props.test}</p>
        <Link href="/">To home page</Link>
      </main>
    </>
  )
}

export const  getServerSideProps = async () => {
  return {
    props: {
      test: 'test-2'
    }
  }
}
