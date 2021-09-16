import axios from 'axios';

const api = axios.create({
    baseURL:"https://gyrgslrefayicnvhczhj.supabase.co/rest/v1",
    headers:{
        apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTc2MzcxOCwiZXhwIjoxOTQ3MzM5NzE4fQ.th_UxP5B9seRk1x0MIin1i6bNPyxd4YMeZI6pzLSFe4',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTc2MzcxOCwiZXhwIjoxOTQ3MzM5NzE4fQ.th_UxP5B9seRk1x0MIin1i6bNPyxd4YMeZI6pzLSFe4`
    }
})

export default api;
