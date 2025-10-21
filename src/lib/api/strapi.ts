import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

// Create axios instance
export const strapiAPI = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    ...(API_TOKEN && { Authorization: `Bearer ${API_TOKEN}` }),
  },
});

// Add auth interceptor
strapiAPI.interceptors.request.use(
  (config) => {
    const token = Cookies.get('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
strapiAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      Cookies.remove('jwt');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API Methods
export const strapiService = {
  // Rooms
  async getRooms(params?: any) {
    const response = await strapiAPI.get('/rooms', { params });
    return response.data;
  },

  async getRoom(id: string) {
    const response = await strapiAPI.get(`/rooms/${id}?populate=*`);
    return response.data;
  },

  // Bookings
  async createBooking(data: any) {
    const response = await strapiAPI.post('/bookings', { data });
    return response.data;
  },

  async confirmPayment(sessionId: string) {
    const response = await strapiAPI.post('/bookings/confirm-payment', { sessionId });
    return response.data;
  },

  async checkAvailability(roomId: string, checkIn: string, checkOut: string) {
    const response = await strapiAPI.get('/bookings/check-availability', {
      params: { roomId, checkIn, checkOut },
    });
    return response.data;
  },

  async getUserBookings() {
    const response = await strapiAPI.get('/bookings/me');
    return response.data;
  },

  async cancelBooking(id: string, reason: string) {
    const response = await strapiAPI.post(`/bookings/${id}/cancel`, { reason });
    return response.data;
  },

  // Attractions
  async getAttractions(params?: any) {
    const response = await strapiAPI.get('/attractions', { params });
    return response.data;
  },

  // Auth
  async login(identifier: string, password: string) {
    const response = await strapiAPI.post('/auth/local', { identifier, password });
    if (response.data.jwt) {
      Cookies.set('jwt', response.data.jwt, { expires: 30 });
    }
    return response.data;
  },

  async register(data: any) {
    const response = await strapiAPI.post('/auth/local/register', data);
    if (response.data.jwt) {
      Cookies.set('jwt', response.data.jwt, { expires: 30 });
    }
    return response.data;
  },

  async logout() {
    Cookies.remove('jwt');
  },

  async getMe() {
    const response = await strapiAPI.get('/users/me?populate=*');
    return response.data;
  },

  // Media URL helper
  getMediaUrl(url: string) {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    return `${API_URL}${url}`;
  },
};

// React Query hooks
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useRooms = (params?: any) => {
  return useQuery({
    queryKey: ['rooms', params],
    queryFn: () => strapiService.getRooms(params),
  });
};

export const useRoom = (id: string) => {
  return useQuery({
    queryKey: ['room', id],
    queryFn: () => strapiService.getRoom(id),
    enabled: !!id,
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: strapiService.createBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
};

export const useCheckAvailability = (roomId: string, checkIn: string, checkOut: string) => {
  return useQuery({
    queryKey: ['availability', roomId, checkIn, checkOut],
    queryFn: () => strapiService.checkAvailability(roomId, checkIn, checkOut),
    enabled: !!roomId && !!checkIn && !!checkOut,
  });
};