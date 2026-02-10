import { createClient } from '@supabase/supabase-js';

const supabaseUrl = '你的SUPABASE_URL';
const supabaseKey = '你的SUPABASE_ANON_KEY';
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function initAuth() {
  // 检查当前用户
  const { data: { session } } = await supabase.auth.getSession();
  
  if (session) {
    console.log('👤 已登录:', session.user.email);
    document.getElementById('loginBtn')!.textContent = 'Wyloguj';
  }
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  
  if (error) throw error;
  return data;
}

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });
  
  if (error) throw error;
  return data;
}
