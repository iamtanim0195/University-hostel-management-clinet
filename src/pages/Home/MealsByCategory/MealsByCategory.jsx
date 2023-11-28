import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { getmealByCategory } from '../../../api/mealCategory';
import Loader from '../../../components/Shared/Loader';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MealCard from './MealCard';

const MealsByCategory = () => {
    const { loading } = useAuth();
    const { data: mealsCategory = [], isLoading, refetch } = useQuery({
        queryKey: ['meals'],
        enabled: !loading,
        queryFn: async () => await getmealByCategory(),
    });
    if (isLoading) return <Loader />;
    const breakfast = mealsCategory.filter((meal) => meal.category === 'Breakfast');
    const lunch = mealsCategory.filter((meal) => meal.category === 'Lunch');
    const dinner = mealsCategory.filter((meal) => meal.category === 'Dinner');
    return (
        <>
            <Tabs className='p-10 '>
                <TabList>
                    <Tab>All Meals</Tab>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-4">
                        {mealsCategory.map((meal) => <MealCard key={meal._id} meal={meal} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-4">
                        {breakfast.map((meal) => <MealCard key={meal._id} meal={meal} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-4">
                        {lunch.map((meal) => <MealCard key={meal._id} meal={meal} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-4">
                        {dinner.map((meal) => <MealCard key={meal._id} meal={meal} />)}
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default MealsByCategory;
