import Service from './service';

const GameService = () => {
    const service = Service();
    const uri = '/game';
    const uriStatus = '/game/status';

    const setGame = async (...config) => {
      try {
        const response = await service.post(uri, ...config);
        return response.data;
      } catch(error) {
          console.log(error);
      }
    };

    const getCard = async () => {
      try {
        const response = await service.get(uri);
        return response.data;
      } catch(error) {
        console.log(error);
      }
    };

    const getStatus = async () => {
      try {
        const response = await service.get(uriStatus);
        return response.data;
      } catch(error){
        console.log(error);
      }
    
    };
    
    return {
        getStatus,
        setGame,
        getCard
    };
};

export default GameService;