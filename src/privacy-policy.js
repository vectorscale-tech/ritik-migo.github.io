import React, { useEffect, useState } from 'react';
import PolicyLayout from './PolicyLayout';

const PrivacyPolicy = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/privacy-policy.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading privacy policy:', error));
  }, []);

  return <PolicyLayout markdownContent={content} />;
};

export default PrivacyPolicy;