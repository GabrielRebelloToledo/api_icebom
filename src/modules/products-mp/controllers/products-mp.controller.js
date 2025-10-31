import { container } from 'tsyringe';
import { BAD_REQUEST, CREATED } from '../../../shared/infra/constants/http-status-code.constants.js';


import ListProductService from '../services/list-mp-products.service.js';
import CreateProductService from '../services/products-mp-create.service.js';
import UpdateProductService from '../services/products-mp-update.service.js';
import DeleteProductService from '../services/products-mp-delete.service.js';


class ProductsMpController {

  async create(request, response) {

    /*  console.log(request.body); */

    const { name,volume, active, codbarras} = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({ name, volume, active, codbarras });

    if (product && process.product === false) {
      return response.status(BAD_REQUEST).json({ message: product.message });
    }

    return response.status(CREATED).json();
  }
  async update(request, response) {

    console.log(request.body);

    const { id, name, active, codbarras } = request.body;

    const updateProduct = container.resolve(UpdateProductService);

    const product = await updateProduct.execute({ id, name, active, codbarras });

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

    //console.log("Cheguei aqui")

    const id = request.params.id;
    const deleteProductService = container.resolve(DeleteProductService);

    const products = await deleteProductService.execute(id);

    if (products && products.success === false) {
      return response.status(BAD_REQUEST).json({ message: products.message });
    }
    return response.status(200).json();
  }
}

export default new ProductsMpController();

