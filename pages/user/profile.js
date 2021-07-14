import Head from 'next/head'
import MobileNav from "../../components/mobilenav"
import SideNav from "../../components/sidenav"
import { useUser } from '@auth0/nextjs-auth0'
import UserProfile from '../../components/user/profile/user-profile'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend';
import { connectToDatabase } from "../../util/mongodb";

export default withPageAuthRequired( function newPersona({ resume }) {
    // importing user form auth0
    const { user } = useUser();
    return (
        <>
            <Head>
                <title>Jobbox - New Persona</title>
            </Head>
            <div class="lg:hidden">
                <MobileNav />
            </div>
            <div class="flex">
                <div class="h-auto px-4 pt-3 bg-regal-blue grid place-content-between hidden lg:block">
                    <SideNav />
                </div>
                <div class="w-screen">
                    <UserProfile resume={resume} user={user} />
                </div>
            </div>
        </>
    )
})



export async function getServerSideProps() {
    const { db } = await connectToDatabase();

    const resume = await db
    .collection(process.env.MONGO_USER_COLLECTION)
    .find()
    .toArray();

      return {
          props: {
              resume: JSON.parse(JSON.stringify(resume)),
          },
      };
  }