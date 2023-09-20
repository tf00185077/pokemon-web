export async function usePokeDataJson() {
    try {
      const response = await fetch('/poke-data.json');
      if (!response.ok) {
        throw new Error('Something wrong');
      }
      const data = await response.json(); // 解析 JSON 数据
      return data;
    } catch (error) {
      console.error('There was a problem:', error);
      throw error;
    }
}
