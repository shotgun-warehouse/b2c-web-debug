import React from 'react';
import { ApolloError } from 'apollo-boost';
import Text from 'components/base/Text';
import { Row } from 'components/base/Layout';
import Loader from 'components/base/Loader';

const parseErrors = (error: ApolloError): string => {
  const graphQLErrors = error.graphQLErrors.filter(
    graphQLError => graphQLError.extensions,
  );
  const internalServerErrors = graphQLErrors.filter(
    graphQLError => graphQLError.extensions!.code === 'INTERNAL_SERVER_ERROR',
  );

  // Display generic message for internal server errors
  if (graphQLErrors.length === 0 || internalServerErrors.length) {
    return "😰\nune erreur s'est produite";

    // or return error to the user
  } else {
    const externalErrorMessages = graphQLErrors.map(
      externalError => `${externalError.message}`,
    );

    return externalErrorMessages.join('\n');
  }
};

interface ErrorMessageProps {
  error?: ApolloError | string | null;
  color?: string;
}
const ErrorMessage = ({ error, color = 'red' }: ErrorMessageProps) => {
  if (error) {
    return (
      <Row mt={1} justifyContent="center" width="100%" height="100%">
        <Text color={color}>
          {typeof error === 'string' ? error : parseErrors(error)}
        </Text>
      </Row>
    );
  } else {
    return <div />;
  }
};

export default ErrorMessage;

// ENHANCEMENT: refactor error and loading handling
export const HandleQuery = ({
  error,
  loading,
}: {
  error?: ApolloError;
  loading?: boolean;
}) => {
  if (error) {
    return <ErrorMessage color="white" error={error} />;
  } else if (loading) {
    return <Loader color="blues.deepSky" />;
  }
  return null;
};
