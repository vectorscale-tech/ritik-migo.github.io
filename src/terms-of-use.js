import React, { useEffect, useState } from 'react';
import PolicyLayout from './PolicyLayout';

const TermsOfUse = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/terms-of-use.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading terms of use:', error));
  }, []);

  return <PolicyLayout markdownContent={content} />;
};

export default TermsOfUse;