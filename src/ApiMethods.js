import ApiInterceptor from './ApiInterceptor';

export default async function getData() {
  try {
    const response = await ApiInterceptor.get(`details`);

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function updateData(data) {
  try {
    await ApiInterceptor.patch('update', data);
  } catch (error) {
    console.log('Unable to Update data', error);
  }
}
export async function postLoginCred(loginCred) {
  try {
    const response = await ApiInterceptor.post('login', loginCred);
    return response;
  } catch (error) {
    console.log('Unable to Login', error);
  }
}

export async function registerData(userData) {
  try {
    const response = await ApiInterceptor.post('register', userData);
    return response;
  } catch (error) {
    console.log('Unable to Register data', error);
  }
}

export async function postLeaveDetails(leaveDetails) {
  try {
    const response = await ApiInterceptor.post('addLeave', leaveDetails);
    return response;
  } catch (error) {
    console.log('Unable to Post Leave Details', error);
  }
}

export async function getLeaveDetails() {
  try {
    const response = await ApiInterceptor.get('getLeaves');
    return response.data;
  } catch (err) {
    console.log('Error Fetching data', err);
  }
}

export async function postEvent(eventData) {
  try {
    const response = await ApiInterceptor.post('event/create', eventData);
    return response;
  } catch (err) {
    console.log('Unable to post Event', err);
  }
}
export async function getEvent() {
  try {
    const response = await ApiInterceptor.get('event/fetch');
    return response.data;
  } catch (err) {
    console.log('Unable to fetch Data', err);
  }
}
export async function updateEvent(formData, id) {
  try {
    const response = await ApiInterceptor.put(`event/update/${id}`, formData);
    return response;
  } catch (err) {
    console.log('Update Unsuccessful', err);
  }
}
