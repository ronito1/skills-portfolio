import React, { useEffect } from 'react';
import { supabase } from './supabase'; // Ensure this path matches your file structure

const TestSupabase = () => {
  useEffect(() => {
    const testSupabaseConnection = async () => {
      try {
        const { data, error } = await supabase.from('students').select('*');
        if (error) {
          console.error('Error fetching data:', error);
        } else {
          console.log('Supabase data:', data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    testSupabaseConnection();
  }, []);

  return <div>Testing Supabase Connection...</div>;
};

export default TestSupabase;
