export async function generateHeroImage(): Promise<string> {
  try {
    const res = await fetch('/api/image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'hero' }),
    });
    if (!res.ok) throw new Error(`Image API returned ${res.status}`);
    const data = await res.json();
    if (data.image) return data.image;
    throw new Error('No image in response');
  } catch (error: any) {
    console.error('Failed to generate hero image:', error);
  }
  return 'https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1000';
}

export async function generateFounderImage(): Promise<string> {
  try {
    const res = await fetch('/api/image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'founder' }),
    });
    if (!res.ok) throw new Error(`Image API returned ${res.status}`);
    const data = await res.json();
    if (data.image) return data.image;
    throw new Error('No image in response');
  } catch (error: any) {
    console.error('Failed to generate founder image:', error);
  }
  return 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=400&h=400';
}
