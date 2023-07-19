import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Sprintigo | Buy sports products',
  description: 'We sell the best sports products with great Quality',
  keywords: 'sports, buy sports, cheap sports',
};

export default Meta;
