import { NextPage } from 'next';
import { useRouter } from 'next/router';
import HomeComponent from '@/components/Pages/Home';
import { useQuery, useMutation, gql } from '@apollo/client';
import { withApollo } from '../api/withApollo';
import Head from 'next/head';
import Router from 'next/dist/next-server/server/router';

const query = gql`
  {
    getTasks {
      id
      title
      content
    }
  }
`;
const mutation = gql`
  mutation deleteOneTask($id: String) {
    deleteTask(id: $id)
  }
`;

export const Home: NextPage = () => {
  // Get Tasks
  const { data, loading, refetch } = useQuery(query, {
    onError: (err) => {
      console.log(err);
    },
  });
  // Delete One Task
  const [deleteTask] = useMutation(mutation, {
    onError: (err) => {
      console.log(err);
    },
    onCompleted: async () => {
      await refetch();
    },
  });

  // Handle Delete
  const handleDelete = async (id) => {
    const response = await deleteTask({
      variables: {
        id,
      },
    });

    console.log(response);
  };
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Trella | Organize your things</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent
        deleteTask={handleDelete}
        refetch={refetch}
        data={!loading && data.getTasks}
      />
    </div>
  );
};

export default withApollo(Home);
