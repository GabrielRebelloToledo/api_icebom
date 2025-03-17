import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ListProductService from '../services/list-products.service.js';
import CreateProductService from '../services/products-create.service.js';
import UpdateProductService from '../services/products-update.service.js';
import DeleteProductService from '../services/products-delete.service.js';


class ProductsController {

  async create(request, response) {

    /*  console.log(request.body); */

    const { name,active } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({ name, active });

    if (product && process.product === false) {
      return response.status(BAD_REQUEST).json({ message: product.message });
    }

    return response.status(CREATED).json();
  }
  async update(request, response) {

    console.log(request.body);

    const { id, name, active } = request.body;

    const updateProduct = container.resolve(UpdateProductService);

    const product = await updateProduct.execute({ id, name, active });

    if (product && process.product === false) {
      return response.status(BAD_REQUEST).json({ message: product.message });
    }

    return response.status(CREATED).json();
  }

  async list(request, response) {
    const listProductService = container.resolve(ListProductService);
    const products = await listProductService.execute();
    return response.json(products);
  }

  async listActive(request, response) {
    const listProductService = container.resolve(ListProductService);
    const products = await listProductService.executeActive();
    return response.json(products);
  }

  async delete(request, response) {

    console.log("Cheguei aqui")

    const id = request.params.id;
    const deleteProductService = container.resolve(DeleteProductService);

    const products = await deleteProductService.execute(id);


    console.log(products)


    /* if (products.success) {
      
      return response.json(products);
    }
    
    return response.status(400).json({ products }); */
    // Retorna a resposta corretamente

  }
}

export default new ProductsController();

