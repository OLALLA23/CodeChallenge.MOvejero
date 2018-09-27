using CodeChallengeMol.Shared.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeChallengeMol.API.Phones
{
    public class PhonesData : Controller
    {
        public static IEnumerable<DetailsPhone> GetDetailsPhones()
        {
            var list = new List<DetailsPhone>();
            
            list.Add(new DetailsPhone
            {
                IdPhone= "1",
                NamePhone = "iPhone Xs",
                Image = "https://tecnomari.es/126-large_default/iphone-x-64gb.jpg",
                Color = "Negro",
                Price = 1011,
                Description = "64 GB, Super Retina de 5.8'', 12 Mpx, Red 4G LTE"
            });
            list.Add(new DetailsPhone
            {
                IdPhone = "2",
                NamePhone = "Xiaomi Mi Mix 2SE",
                Image = "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/06/11/goods-img/1528702393141217547.jpg",
                Color = "Blanco",
                Price = 599,
                Description = "Full HD, 4G, 128 GB, 8 GB RAM, 12MP + 5MP"
            });

            list.Add(new DetailsPhone
            {
                IdPhone="3",
                NamePhone = "Samsung Galaxy J7",
                Image = "https://thumb.pccomponentes.com/w-530-530/articles/13/132153/m3.jpg",
                Color = "Oro",
                Price = 189,
                Description = "5.5'', Full HD, 16 GB, Octa-Core, Red 4G, Oro"
            });

            list.Add(new DetailsPhone
            {
                IdPhone="4",
                NamePhone = "Huawei P Smart+",
                Image = "https://thumb.pccomponentes.com/w-530-530/articles/16/169415/nova-3i-product-image-standard-blue-front-ice-sp.jpg",
                Color = "Negro",
                Price = 289,
                Description = "Full HD+, Kirin 710, 4 GB RAM, 64 GB, 24 MP + 2 MP, Dual Nano SIM"
            });

            list.Add(new DetailsPhone
            {
                IdPhone="5",
                NamePhone = "Motorola Moto E4",
                Image = "https://images-eu.ssl-images-amazon.com/images/I/31W5424OMiL._AC_SS350_.jpg",
                Color = "Gris",
                Price = 99,
                Description = "5'', HD, 16 GB, 2 GB RAM, 8 MP"
            });

            list.Add(new DetailsPhone
            {
                IdPhone="6",
                NamePhone = "Xiaomi Mi A1",
                Image = "https://img.pccomponentes.com/articles/14/146167/1.jpg",
                Color = "Dorado",
                Price = 179,
                Description = "5.5'', Full HD, 4K, 4G, 32 GB, Octa-Core, Cámara 12 MP"
            });

            return list;
        }
    }
}
