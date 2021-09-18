import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const supabase2 = createClient(
  'https://gyrgslrefayicnvhczhj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTc2MzcxOCwiZXhwIjoxOTQ3MzM5NzE4fQ.th_UxP5B9seRk1x0MIin1i6bNPyxd4YMeZI6pzLSFe4',
  {
    localStorage: AsyncStorage as any,
  }
);
