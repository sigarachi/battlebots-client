import { useSelector } from 'react-redux';
import { User } from '@services/user';
import { userResultSelector } from '@store/selectors';

export const useUser = (): User | undefined => {
	const user = useSelector(userResultSelector);

	return user.data;
};
