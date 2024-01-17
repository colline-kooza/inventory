export default async function getSingle(endpoint) {
    try {
      const baseUrl ="http://localhost:3000";
      const response = await fetch(`${baseUrl}/api/${endpoint}`,{
        cache:"no-store"
      });
      const data = await response?.json();
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  